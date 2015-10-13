class Api::HousesController < ApplicationController
  def show
    @house = House.find(params[:id])
    render :show
  end
end
