# AI Agents Management

AI Agents Management เป็นบริการสำหรับสร้าง ตั้งค่า และจัดการ AI agents ในระบบ LifeTimeSoft ช่วยให้คุณสามารถรัน AI agents แบบอัตโนมัติ ตั้งเวลาการทำงาน และติดตามสถานะได้อย่างง่ายดาย

## ฟีเจอร์หลัก

### 1. Agent Repository
เรียกดูและจัดการ AI agents ที่มีอยู่ในระบบ
- ดูรายชื่อ AI agents ทั้งหมด
- ค้นหาและ filter agents ตาม namespace
- ดูรายละเอียดและ version ของแต่ละ agent
- ดาวน์โหลด agent package (.tar.gz, .zip)

### 2. Agent Instances
สร้างและจัดการ instance ของ AI agents
- สร้าง instance ใหม่จาก agent template
- ดูสถานะการทำงานแบบ real-time (Running, Stopped, Offline, Error)
- Start/Stop instance ได้ตามต้องการ
- ดูข้อมูล hostname, IP address, และเวลาที่ทำงานล่าสุด

### 3. Scheduler Configuration
ตั้งเวลาการทำงานอัตโนมัติด้วย cron expression
- รองรับ cron format 5 หรือ 6 fields
- ตัวอย่าง: `0 */5 * * * *` (ทุก 5 นาที)
- ตัวอย่าง: `0 0 * * *` (ทุกวันเวลาเที่ยงคืน)
- Reload configuration แบบ real-time ผ่าน WebSocket

### 4. Monitoring & Logs
ติดตามและวิเคราะห์การทำงานของ agents
- ดูสถานะ CPU time และ Wall time
- ดูข้อมูล RayID สำหรับ debugging
- ดูประวัติ error logs และ console logs
- Filter logs ตามวันที่และระดับความสำคัญ

## การใช้งาน

### สร้าง Agent Instance

1. ไปที่หน้า **Agent Instances**
2. คลิกปุ่ม **"Create New Instance"**
3. เลือก agent template ที่ต้องการ
4. กรอกข้อมูล:
   - **Instance Name**: ชื่อ instance (ไม่ซ้ำกัน)
   - **Agent Version**: เลือก version ที่ต้องการ
   - **Configuration**: ตั้งค่า environment variables (ถ้ามี)
5. คลิก **"Create"** เพื่อสร้าง instance

### ตั้งค่า Scheduler

1. ไปที่หน้า **Instance Detail**
2. ในส่วน **Scheduler Configuration**
3. กรอก **Cron Expression**:
   - `0 */5 * * * *` - ทุก 5 นาที
   - `0 0 * * * *` - ทุกชั่วโมง
   - `0 0 0 * * *` - ทุกวันเวลาเที่ยงคืน
   - `0 0 9 * * 1-5` - ทุกวันจันทร์-ศุกร์ เวลา 9:00
4. คลิก **"Save Configuration"**
5. ระบบจะส่ง WebSocket message เพื่อ reload config อัตโนมัติ

### Start/Stop Agent

1. ไปที่หน้า **Instance Detail**
2. คลิกปุ่ม **"Start"** เพื่อเริ่มการทำงาน
3. คลิกปุ่ม **"Stop"** เพื่อหยุดการทำงาน
4. สถานะจะอัพเดทแบบ real-time

### ดูประวัติ Logs

1. ไปที่หน้า **System Logs** (Admin Panel)
2. เลือกวันที่ที่ต้องการดู
3. Filter ตามระดับ:
   - **All**: ทั้งหมด
   - **Errors**: เฉพาะ errors (status >= 500)
   - **Warnings**: เฉพาะ warnings (status 400-499)
   - **Info**: เฉพาะ info (status 200-399)
4. คลิกที่แถว log เพื่อดูรายละเอียดเพิ่มเติม

### ลบ Instance

1. ไปที่หน้า **Instance Detail**
2. เลื่อนลงไปที่ **Danger Zone**
3. คลิกปุ่ม **"Delete Instance"**
4. ยืนยันการลบ
5. ระบบจะลบทั้ง instance และ Durable Object

## Status Codes

| Status | ความหมาย | สี | คำอธิบาย |
|--------|---------|-----|----------|
| **Running** | กำลังทำงาน | 🟢 เขียว | Agent ทำงานปกติ |
| **Stopped** | หยุดทำงาน | ⚪ เทา | Agent ถูก stop โดยผู้ใช้ |
| **Offline** | ออฟไลน์ | 🟡 เหลือง | Agent ไม่ส่ง heartbeat มาสักพัก |
| **Error** | ข้อผิดพลาด | 🔴 แดง | Agent เกิด error ระหว่างทำงาน |

## TTL (Time To Live)

- Instance จะถูกเก็บไว้ **90 วัน** หลังจาก offline/stopped
- เมื่อเหลือเวลา **7 วัน** จะมีการแจ้งเตือน
- หลังจาก 90 วัน instance จะถูกลบอัตโนมัติ
- สามารถขยาย TTL ได้โดยการ start instance ใหม่