-- 사용자 계정
CREATE TABLE test_user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL
);

INSERT INTO test_user (username, password) VALUES
('alice', 'pass123'),
('bob', 'qwerty'),
('charlie', 'hello');

-- 게시판
CREATE TABLE test_board (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  content TEXT,
  author VARCHAR(50)
);

INSERT INTO test_board (title, content, author) VALUES
('첫 번째 글', '안녕하세요. Alice의 글입니다.', 'alice'),
('두 번째 글', '여기는 Bob이 쓴 글이에요.', 'bob'),
('세 번째 글', 'Charlie의 테스트 게시글.', 'charlie');
