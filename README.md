# jason-kang-storybook-lecture

jason-kang-storybook-lecture is a comprehensive design system built with Tailwind CSS and Storybook, designed to empower developers and designers to build consistent and beautiful interfaces efficiently.

## Installation

Install jason-kang-storybook-lecture into your project with NPM:

```bash
npm install jason-kang-storybook-lecture
```

## Usage

After installation, you must import the main CSS file in your project to access the full range of styles provided by Tailwind CSS. Add the following line to the root of your project such as `App.tsx` or `main.tsx`:

```javascript
import 'jason-kang-storybook-lecture/index.css';
```

And then you can import components from `jason-kang-storybook-lecture` directly like below

```typescript
import { DefaultTextField, PrimaryButton } from "jason-kang-storybook-lecture";

export default function LoginPage() {
  return (
    ...
      <DefaultTextField
        id="username"
        placeholder="아이디를 입력해주세요"
        onChange={handleUsernameChange}
      />
      <DefaultTextField
        id="password"
        type="password"
        placeholder="비밀번호를를 입력해주세요"
        onChange={handlePasswordChange}
      />
      <PrimaryButton onClick={() => handleLogin(username, password)}>로그인</PrimaryButton>
    ...
  );
}
```

This ensures that all jason-kang-storybook-lecture components render with the intended design specifications.

## Components
jason-kang-storybook-lecture offers a wide range of components that are ready to use in your projects. To see the components available and learn how to use them, refer to the Storybook documentation provided with the package.

## Contributing
We welcome contributions to the jason-kang-storybook-lecture project! If you have suggestions for improvements or encounter any issues, please feel free to open an issue or submit a pull request.

## License
jason-kang-storybook-lecture is released under the MIT License. See the LICENSE file for more details.

