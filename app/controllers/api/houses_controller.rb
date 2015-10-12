class Api::HousesController < ApplicationController
  def show
    @house = House.find(params[:id])
    render json: @house
  end
end
