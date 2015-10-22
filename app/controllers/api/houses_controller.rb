class Api::HousesController < ApplicationController
  def index
    @houses = House.includes(:professors).includes(reviews: :likes)
    render :index
  end

  def show
    @house = House.includes(:professors).includes(reviews: :likes).find(params[:id])
    render :show
  end
end
