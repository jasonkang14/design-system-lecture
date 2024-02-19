import { useState } from "react";
import DefaultTextField from "./DefaultTextField";
import Label from "./Label";
import PrimaryButton from "./PrimaryButton";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Label htmlFor="email">이메일</Label>
      <DefaultTextField
        id="email"
        errorMessage="이메일을 확인해주세요"
        iconPath="https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg"
        iconAlt="delete"
        onIconClick={() => setEmail("")}
        placeholder="이메일을 입력해주세요"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        isError={false}
      />
      <Label htmlFor="password">비밀번호</Label>
      <DefaultTextField
        id="password"
        errorMessage="비밀번호를 확인해주세요"
        iconPath="https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg"
        iconAlt="delete"
        onIconClick={() => setPassword("")}
        placeholder="비밀번호를 입력해주세요"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        isError={false}
      />
      <PrimaryButton
        onClick={() => {}}
        disabled={!email || !password}
        theme="dark"
      >
        로그인
      </PrimaryButton>
    </div>
  );
}
