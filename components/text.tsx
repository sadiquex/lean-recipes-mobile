import { Text, TextProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

type TypographyVariant =
  | 'title'
  | 'subtitle'
  | 'body'
  | 'caption'
  | 'button'
  | 'display'
  | 'caption-primary'
  | 'body-primary'
  | 'subtitle-primary';

interface TextComponentProps extends TextProps {
  className?: string;
  variant?: TypographyVariant;
}

const variantStyles: Record<TypographyVariant, string> = {
  title: 'text-2xl font-sora-bold',
  subtitle: 'text-xl font-sora-semi-bold',
  'subtitle-primary': 'text-xl font-sora-semi-bold text-primary',
  body: 'text-base font-sora-regular',
  caption: 'text-sm font-sora-medium',
  button: 'text-xl text-primary font-sora-semi-bold text-white text-center',
  display: 'text-3xl font-sora-bold',
  'body-primary': 'text-base text-primary font-sora-regular',
  'caption-primary': 'text-sm text-primary font-sora-medium',
};

const CustomText = ({ variant = 'body', className, children, ...props }: TextComponentProps) => {
  const textStyle = twMerge('text-black', variantStyles[variant], className);

  return (
    <Text className={textStyle} {...props}>
      {children}
    </Text>
  );
};

export default CustomText;
