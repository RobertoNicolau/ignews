import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceID: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe Now
    </button>
  );
}
