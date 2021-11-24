class ItemsController < ApplicationController
  before_action :set_item, only: [:show, :update, :destroy]
  # these are render a component (the SPA)
  def app
    render component: "App"
  end

  # these all render json
  def index
    render json: Item.all
  end

  def show
    render json: @item
  end

  def create
    @item = Item.new(item_params)
    if (@item.save)
      # this will status 204: 2xx - successfull
      render json: @item
    else
      #4XX - client error 422 unprocesable entity (bad data)
      render json: { errors: @item.errors.full_messages }, status: 422
    end
  end

  def update
    if (@item.update(item_params))
      # this will status 204: 2xx - successfull
      render json: @item
    else
      #4XX - client error 422 unprocesable entity (bad data)
      render json: { errors: @item.errors.full_messages }, status: 422
    end
  end

  def destroy
    render json: @item.destroy
  end

  private

  def set_item
    @item = Item.find(params[:id])
  end

  def item_params
    Item.require(:item).permit(:name, :category, :likes, :description)
  end
end
