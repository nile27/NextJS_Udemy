"use client";
import { useState, ChangeEvent, useEffect, useRef } from "react";
import { auth, firestore } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const SignUpPage = () => {
  const [userId, setuserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const localEmail =
    typeof window !== "undefined"
      ? localStorage.getItem("emailForSignIn") || ""
      : "";

  const [imgFile, setImgFile] = useState<string | null>(null);
  const imgRef = useRef<HTMLInputElement>(null);

  const saveImgFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      return;
    }
    const file = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result as string);
    };
  };

  const handleSignUp = async () => {
    try {
      if (!localEmail) {
        throw new Error("Local email not found");
      }

      const authResult = await createUserWithEmailAndPassword(
        auth,
        localEmail,
        password
      );
      const user = authResult.user;

      await updateProfile(user, {
        displayName: "displayName",
        // photoURL: "<사용자의 프로필 사진 URL>", // 필요에 따라 프로필 사진 업데이트 가능
      });

      // 회원가입 후 추가적인 사용자 정보 저장 등의 작업을 수행할 수 있음
      const userRef = doc(firestore, "users", user.uid);
      await setDoc(userRef, {
        userId: userId,
        email: localEmail, // userId를 이메일로 사용
        displayName: "displayName",
        image: imgFile,
        // 추가 필드 추가 가능
      });

      // 회원가입 성공 후 리다이렉션 또는 다른 작업 수행
    } catch (error) {
      console.error("Error signing up:", error);
      // 에러 처리 로직 추가
    }
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setuserId(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    //setLocalEmail(localStorage.getItem("emailForSignIn"));
    console.log(localEmail);
  }, []);

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={userId}
        onChange={handleChangeEmail}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handleChangePassword}
      />

      <div className="   pb-5 w-full h-auto flex justify-center items-center">
        <label
          htmlFor="profileImg"
          style={{
            backgroundImage: imgFile ? `url(${imgFile})` : "red",
          }}
          className={` bg-red-400 relative w-[140px] h-[140px] bg-cover bg-center cursor-pointer rounded-full`}
        >
          <div className="bg-[#9F9F9F] rounded-full absolute bottom-0 right-0"></div>
        </label>

        <input
          type="file"
          accept="image/*"
          id="profileImg"
          onChange={saveImgFile}
          ref={imgRef}
          className="hidden w-full h-full "
        />
      </div>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUpPage;
