class Api::LikesController < ApplicationController
  before_action :require_sign_in!

  def new
    @like = current_user.likes.new(like_params)
  end

  def create
    @like = current_user.likes.new(like_params)
    @review = Review.find(@like.review_id)
    if @like.save
      @professor = Professor.includes(:house).includes(reviews: [:user, :likes]).find(@review.professor_id)
      render template: "api/professors/show"
    else
      render json: { failures: @like.errors.full_messages }, status: 422
    end
  end

  def destroy
    @like = Like.find(params[:id])
    @review = Review.find(@like.review_id)
    @like.destroy
    @professor = Professor.includes(:house).includes(reviews: [:user, :likes]).find(@review.professor_id)
    render template: "api/professors/show"
  end

  private

  def like_params
    params.require(:like).permit(:review_id)
  end
end
