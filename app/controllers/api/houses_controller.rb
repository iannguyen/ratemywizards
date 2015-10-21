class Api::HousesController < ApplicationController
  def index
    @houses = House.includes(:professors).includes(:reviews)
    render :index
  end

  def show
    @house = House.includes(:professors).includes(:reviews).find(params[:id])
    render :show
  end
end
