export class ReviewCommentDto {
  comment_id: number;
  review_id: number;
  user_id: number;
  content: string;
  created_at: Date;
  updated_at: Date;
  likes_count: number;
  nickname: string;
  profile_image_url: string;


  static fromRaw(raw: any): ReviewCommentDto {
    const dto = new ReviewCommentDto();
    dto.comment_id = raw.comment_id;
    dto.review_id = raw.review_id;
    dto.user_id = raw.user_id;
    dto.content = raw.content;
    dto.created_at = raw.created_at;
    dto.updated_at = raw.updated_at;
    dto.likes_count = raw.likes_count;
    dto.nickname = raw.nickname;
    dto.profile_image_url = raw.profile_image_url;
    return dto;
  }

  static fromRawArray(rows: any[]): ReviewCommentDto[] {
    return rows.map(ReviewCommentDto.fromRaw);
  }

}