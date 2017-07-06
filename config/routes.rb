Rails.application.routes.draw do
  root 'welcome#index'
  resources :orders
  resources :tags
  resources :business_models
  resources :menu_items
  resources :restaurants do
    resources :menu_items
  end

  post '/orders/:order_id/add/:menu_item_id', to: 'orders#add_item', as: 'add_menu_item'

end
