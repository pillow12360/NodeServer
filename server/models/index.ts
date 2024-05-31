import { Sequelize } from 'sequelize';
import { initUser, User } from './user';
import { initPost, Post } from './post';
import { initComment, Comment } from './comment';

// 데이터베이스 연결 설정
const sequelize = new Sequelize('nodeserver', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // 로깅 비활성화 (필요에 따라 true로 설정 가능)
});

// 모델 초기화
initUser(sequelize);
initPost(sequelize);
initComment(sequelize);

// 관계 설정
User.hasMany(Post, {
  foreignKey: 'userId',
  as: 'posts', // 사용자가 작성한 포스트
});
Post.belongsTo(User, {
  foreignKey: 'userId',
  as: 'author', // 포스트의 작성자
});

User.hasMany(Comment, {
  foreignKey: 'userId',
  as: 'comments', // 사용자가 작성한 댓글
});
Comment.belongsTo(User, {
  foreignKey: 'userId',
  as: 'commenter', // 댓글의 작성자
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  as: 'comments', // 포스트에 달린 댓글
});
Comment.belongsTo(Post, {
  foreignKey: 'postId',
  as: 'post', // 댓글이 달린 포스트
});

// 데이터베이스 및 모델 동기화
sequelize
  .sync({ force: true })
  .then(() => {
    console.log('Database and tables created!');
  })
  .catch((error: any) => {
    console.error('Failed to create database and tables: ', error);
  });

export { sequelize, User, Post, Comment };
