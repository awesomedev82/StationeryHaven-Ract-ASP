import { BasketItem } from "../models/basket";
import { addBasketItemAsync, removeBasketItemAsync } from "../redux/basketSlice";
import { useAppDispatch } from "../redux/store/configureStore";

type Action = "add" | "remove" | "delete";

const useButtonClickHandler = () => {
  const dispatch = useAppDispatch();

  const handleButtonClick = (
    productId: number,
    action: Action,
    items: BasketItem[]
  ) => {

    switch (action) {
      case "add":
        dispatch(addBasketItemAsync({ productId }));
        break;
      case "remove":
        dispatch(removeBasketItemAsync({ productId, quantity: 1, name: "remove" }));
        break;
      case "delete":
        const itemToDelete = items.find((item) => item.productId === productId);
        if (itemToDelete) {
          dispatch(
            removeBasketItemAsync({
              productId,
              quantity: itemToDelete.quantity,
              name: "delete",
            })
          );
        }
        break;
      default:
        break;
    }
  };

  return { handleButtonClick };
};

export default useButtonClickHandler;