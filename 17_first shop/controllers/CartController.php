<?php

class CartController
{

    public function actionAdd($id)
    {
        // Добавляем товар в корзину
        Cart::addProduct($id);

        // Возвращаем пользователя на страницу из которой пришёл
        $referrer = $_SERVER['HTTP_REFERER']; // с какой страницы пришёл пользователь
        header("Location: $referrer"); // Отправляем пользователя на ту страницу с которой он пришёл
    }

    public function actionAddAjax($id)
    {
        // Добавляем товар в корзину
        echo Cart::addProduct($id);
        return true;
    }

    public function actionIndex()
    {
        $categories = array();
        $categories = Category::getCategoriesList();

        $productsInCart = false;

        // Получим данные из корзины
        $productsInCart = Cart::getProducts();

        if ($productsInCart) {
            // Получаем полную информацию о товарах для списка
            $productsIds = array_keys($productsInCart);
            $products = Product::getProdustsByIds($productsIds);

            // Получаем общую стоимость товаров
            $totalPrice = Cart::getTotalPrice($products);
        }

        require_once(ROOT . '/views/cart/index.php');

        return true;
    }

}
