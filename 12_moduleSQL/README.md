# MySQL module

### Task 1. Создать таблицу со следующими данными:

```sql
mysql> CREATE TABLE users(
	id int primary key auto_increment,
	name varchar(30) not null default 'No name',
	pwd varchar(32) not null default '',
	email varchar(40) not null default '',
	gender enum ('m', 'f')
	);
```

```sql
mysql> desc users;
```

```
+--------+---------------+------+-----+---------+----------------+
| Field  | Type          | Null | Key | Default | Extra          |
+--------+---------------+------+-----+---------+----------------+
| id     | int(11)       | NO   | PRI | NULL    | auto_increment |
| name   | varchar(30)   | NO   |     | No name |                |
| pwd    | varchar(32)   | NO   |     |         |                |
| email  | varchar(40)   | NO   |     |         |                |
| gender | enum('m','f') | YES  |     | NULL    |                |
+--------+---------------+------+-----+---------+----------------+
6 rows in set (0.00 sec)
```

```sql
INSERT INTO users
	(name, pwd, email, gender)
VALUES
	('Vasya', '21341234qwfsdf', 'mmm@mmail.com', 'm'),
	('Alex', '21341234', 'mmm@gmail.com', 'm'),
	('Alexey', 'qq21341234Q', 'alexey@gmail.com', 'm'),
	('Helen', 'MarryMeeee', 'hell@gmail.com', 'f'),
	('Jenny', 'SmakeMyb', 'eachup@gmail.com', 'f'),
	('Lora', 'burn23', 'tpicks@gmail.com', 'f');
```

```sql
mysql> SELECT * FROM users;
```

```
+----+--------+----------------+------------------+--------+
| id | name   | pwd            | email            | gender |
+----+--------+----------------+------------------+--------+
|  1 | Vasya  | 21341234qwfsdf | mmm@mmail.com    | m      |
|  2 | Alex   | 21341234       | mmm@gmail.com    | m      |
|  3 | Alexey | qq21341234Q    | alexey@gmail.com | m      |
|  4 | Helen  | MarryMeeee     | hell@gmail.com   | f      |
|  5 | Jenny  | SmakeMyb       | eachup@gmail.com | f      |
|  6 | Lora   | burn23         | tpicks@gmail.com | f      |
+----+--------+----------------+------------------+--------+
6 rows in set (0.00 sec)
```

### Task 2. Отобразить данные приведенного ниже вида, обратить внимание на `he` и `she`:

```sql
mysql> SELECT (CONCAT('this is ', users.name, ', ', (if(gender='m', 'he', 'she')), ' has email ', users.email)) `info` FROM users;
```

```
+-----------------------------------------------+
| info                                          |
+-----------------------------------------------+
| This is Vasya, he has email mmm@mmail.com     |
| This is Alex, he has email mmm@gmail.com      |
| This is Alexey, he has email alexey@gmail.com |
| This is Helen, she has email hell@gmail.com   |
| This is Jenny, she has email eachup@gmail.com |
| This is Lora, she has email tpicks@gmail.com  |
+-----------------------------------------------+
6 rows in set (0.00 sec)
```

### Task 3. Отобразить данные приведенного ниже вида:

```sql
mysql> SELECT (CONCAT('We have ', count(users.gender), ' boys!')) `Gender information` FROM users WHERE users.gender='m' UNION SELECT (CONCAT('We have ', count(users.gender), ' girls!')) FROM users WHERE users.gender='f';
```

```
+---------------------+
| Gender information: |
+---------------------+
| We have 3 boys!     |
| We have 3 girls!    |
+---------------------+
2 rows in set (0.01 sec)
```


### Task4. Создать и заполнить структуру данных для хранения словарей и слов из них:

```sql
create table word (id serial, word varchar(255), vocabulary_id integer);

create table vocabulary (id serial, name varchar(255), info text);

```

```sql
INSERT INTO vocabulary
	(name)
VALUES
	('animals'),
	('school'),
	('nature'),
	('human'),
	('SF');

INSERT INTO word
	(word, vocabulary_id)
VALUES
	('turtle', 1),
	('pig', 1),
	('dog', 1),
	('cat', 1),
	('lizard', 1),
	('cow', 1),
	('rabbit', 1),
	('frog', 1),
	('headgehog', 1),
	('goat', 1);

INSERT INTO word
	(word, vocabulary_id)
VALUES
	('desk', 2),
	('book', 2),
	('chalk', 2),
	('pen', 2),
	('pencil', 2),
	('copybook', 2),
	('lesson', 2),
	('teacher', 2),
	('pupils', 2),
	('school', 2);

INSERT INTO word
	(word, vocabulary_id)
VALUES
	('ray', 3),
	('thunder', 3),
	('sun', 3),
	('field', 3),
	('hill', 3),
	('mountain', 3),
	('river', 3),
	('forest', 3),
	('grass', 3),
	('rain', 3);

INSERT INTO word
	(word, vocabulary_id)
VALUES
	('hair', 4),
	('nail', 4),
	('finger', 4),
	('eye', 4),
	('tooth', 4),
	('knee', 4),
	('elbow', 4),
	('leg', 4),
	('arm', 4),
	('head', 4);

INSERT INTO word
	(word, vocabulary_id)
VALUES
	('engine', 5),
	('steel', 5),
	('power', 5),
	('nuclear', 5),
	('shotgun', 5),
	('laser', 5),
	('flight', 5),
	('energy', 5),
	('Moon', 5),
	('splace', 5);

```


### Task 5. Получите результат:

```sql
mysql> SELECT name, count(*) as `words` FROM vocabulary JOIN word ON (vocabulary_id=vocabulary.id) GROUP BY name;
```

```
+---------+-------+
| name    | words |
+---------+-------+
| animals |    10 |
| school  |    10 |
| nature  |    10 |
| human   |    10 |
| SF      |    10 |
+---------+-------+
5 rows in set (0.00 sec)
```
