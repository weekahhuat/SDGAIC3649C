-- Step 1: Create the user
DROP USER IF EXISTS 'rpLesson15'@'localhost';
DROP USER IF EXISTS 'rpLesson15'@'%';
DROP USER IF EXISTS 'root'@'%';
CREATE USER 'rpLesson15'@'localhost' IDENTIFIED BY 'Republic$01';
CREATE USER 'rpLesson15'@'%' IDENTIFIED BY 'Republic$01';
CREATE USER 'root'@'%' IDENTIFIED BY 'Republic$01';

-- Step 2: Grant all privileges on the schema/database
GRANT ALL PRIVILEGES ON *.* TO 'rpLesson15'@'localhost';
GRANT ALL PRIVILEGES ON *.* TO 'rpLesson15'@'%';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%';

-- Step 3: Apply the changes
FLUSH PRIVILEGES;

