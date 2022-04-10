import React, { useState, useEffect } from "react";
import Link from "next/link";
import * as authApi from "../../axios/authApi";
import { useStore, actions } from "../../context";
import router from "next/router";

// layout for page

import Auth from "layouts/Auth.js";

export default function Register() {
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [state, dispatch] = useStore();

  useEffect(() => {
    dispatch(actions.reload());
  }, []);
  useEffect(() => {
    if (state.isAuthenticated) {
      router.push("/");
    }
  }, [state]);

  const register = async (e) => {
    e.preventDefault();
    const body = {
      userName: e.target.userName.value,
      password: e.target.password.value,
      email: e.target.email.value,
    };
    if (validPassword) {
      const res = await authApi.register(body);
      if (res.success) {
        dispatch(actions.login(res.token));
        router.push("/");
      }
    }
  };
  useEffect(() => {
    if (confirmPass === password) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  }, [confirmPass, password]);
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h1 className="text-blueGray-500 text-4xl font-bold">
                    Đăng ký
                  </h1>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={register}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Tên người dùng
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Tên người dùng"
                      name="userName"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      name="email"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Mật khẩu
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Mật khẩu"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      name="password"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Xác nhận mật khẩu{" "}
                      {!validPassword && (
                        <span className="text-red-500">
                          Xác nhận mật khẩu không trùng khớp
                        </span>
                      )}
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Xác nhận mật khẩu"
                      value={confirmPass}
                      onChange={(e) => {
                        setConfirmPass(e.target.value);
                      }}
                    />
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Tạo tài khoản
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-full text-right">
                <Link href="/auth/login">
                  <a href="#pablo" className="text-blueGray-200">
                    <small>Đã có tài khoản? Đăng nhập</small>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Register.layout = Auth;
