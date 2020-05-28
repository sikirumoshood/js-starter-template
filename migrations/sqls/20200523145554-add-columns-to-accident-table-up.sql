/* Replace with your SQL commands */
ALTER TABLE accidents ADD COLUMN status VARCHAR(200) DEFAULT('pending');
ALTER TABLE accidents ADD COLUMN warden_user_id VARCHAR(50);
ALTER TABLE accidents ADD COLUMN ussd_session_id VARCHAR(200);
ALTER TABLE accidents ADD COLUMN victim_phone_number VARCHAR(20);
ALTER TABLE accidents ADD COLUMN longitude NUMERIC;
ALTER TABLE accidents ADD COLUMN latitude NUMERIC;
ALTER TABLE accidents ADD COLUMN address TEXT;
ALTER TABLE accidents ADD COLUMN severity VARCHAR(50);
ALTER TABLE accidents ADD COLUMN address_meta_data JSON;




