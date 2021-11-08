class CommentsController < ApplicationController
  # # GET /comments
  # def index
  #   @comments = Comment.all

  #   render json: @comments
  # end

  # GET /comments/1
  def show
    render json: @comment
  end

  # POST /comments
  # def create
  #   @comment = Comment.new(comment_params)

  #   if @comment.save
  #     render json: @comment, status: :created
  #   else
  #     render json: @comment.errors, status: :unprocessable_entity
  #   end
  # end

  # private

  # Only allow a list of trusted parameters through.
  # def comment_params
  #   params.fetch(:comment)
  # end
end
