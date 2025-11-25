export const NOTIFICATION_TYPES = {
  LATE_PURCHASES: "compras_atrasadas",
  NO_PURCHASES: "sem_compras_realizadas",
};

export const NOTIFICATIONS = [
  {
    id: 1,
    type: NOTIFICATION_TYPES.LATE_PURCHASES,
    title: "Compras Atrasadas",
    message: "Você tem 3 compras com entrega atrasada.",
  },
  {
    id: 2,
    type: NOTIFICATION_TYPES.NO_PURCHASES,
    title: "Nenhuma Compra Recente",
    message: "Faz 15 dias que você não realiza uma nova compra.",
  },
];
