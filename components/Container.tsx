import { SafeAreaView } from 'react-native';
import { twMerge } from 'tailwind-merge';

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <SafeAreaView className={twMerge(styles.container, className)}>{children}</SafeAreaView>;
};

const styles = {
  container: 'flex flex-1 m-4',
};
