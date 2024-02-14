interface ILabelProps {
  htmlFor: string;
  children: string;
}

export default function Label({ htmlFor, children }: ILabelProps) {
  return <label htmlFor={htmlFor}>{children}</label>;
}
