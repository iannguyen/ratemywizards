class Api::HousesController < ApplicationController
  def index
    @houses = House.includes(:professors).includes(:reviews)
    render :index
  end

  def show
    @house = House.find(params[:id])
    render :show
  end

  # House.average(:ratings)
end
