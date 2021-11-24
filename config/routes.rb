Rails.application.routes.draw do
  # resources :items
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # this will be the only route that renders a component(html)
  root "items#app"

  # these routes for the demo will all render json:
  # standard crud route except new/edit
  get "/items", to: "items#index"
  get "/items/:id", to: "items#show"

  post "/items", to: "items#create"

  put "/items/:id", to: "items#update"
  patch "/items/:id", to: "items#update"

  delete "/items/:id", to: "items#destroy"
end
