class Api::ReviewsController < ApplicationController
  before_action :require_sign_in!

  def new
  end

  def create
    @review = current_user.reviews.new(review_params)
    if @review.save
      flash[:errors] = ["Review created successfully"]
      render json: @review
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def index
    @reviews = Review.all
    render json: @reviews
  end

  def show
    @review = Review.find(params[:id])
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    flash[:errors] = ["Review Deleted successfully"]
    render :root
  end

  private

  def review_params
    params.require(:review).permit(:anonymous, :user_id, :professor_id, :body, :ability, :easiness, :helpfulness)
  end
end
