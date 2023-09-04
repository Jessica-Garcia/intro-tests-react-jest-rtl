/* import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event"; */
import { act, renderHook } from "@testing-library/react";
import { useAuth } from "./useAuth";
/**
 * logout()
 *
 * login({login, password}) -> void || error
 *
 * return {
 * user,
 * login,
 * isAuthenticated,
 * logout
 * }
 */

describe("useAuth", () => {
  it("should return default values", () => {
    const { result } = renderHook(() => useAuth());

    expect(result.current.user).toBe(null);
    expect(result.current.isAuthenticated).toBe(false);
    expect(typeof result.current.login).toBe("function");
    expect(typeof result.current.logout).toBe("function");
  });

  it("should isAuthenticated to be false and user to be null when logout was called", () => {
    const { result } = renderHook(() => useAuth());

    act(() => {
      result.current.logout();
    });

    expect(result.current.user).toBe(null);
    expect(result.current.isAuthenticated).toBe(false);
  });

  it("should isAuthenticated to be true and user contains correctly infos when login was called with success", () => {
    const { result } = renderHook(() => useAuth());

    act(() => {
      result.current.login({ login: "email", password: "123" });
    });

    expect(result.current.user).toMatchObject({
      name: "Joe",
      permissions: ["all"],
      isAdmin: true,
      token: "kjsdkjajhsd",
    });
    expect(result.current.isAuthenticated).toBe(true);
  });
});
