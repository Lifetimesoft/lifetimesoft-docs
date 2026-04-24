# AI Agents Management

AI Agents Management is a service for creating, configuring, and managing AI agents in the LifeTimeSoft system. It allows you to run AI agents automatically, schedule tasks, and monitor their status with ease.

## Key Features

### 1. Agent Repository
Browse and manage AI agents available in the system
- View all AI agents
- Search and filter agents by namespace
- View details and versions of each agent
- Download agent packages (.tar.gz, .zip)

### 2. Agent Instances
Create and manage instances of AI agents
- Create new instances from agent templates
- View real-time status (Running, Stopped, Offline, Error)
- Start/Stop instances on demand
- View hostname, IP address, and last active time

### 3. Scheduler Configuration
Schedule automated tasks using cron expressions
- Supports both 5-field and 6-field cron formats
- Example: `0 */5 * * * *` (every 5 minutes)
- Example: `0 0 * * *` (every day at midnight)
- Real-time configuration reload via WebSocket

### 4. Monitoring & Logs
Track and analyze agent performance
- View CPU time and Wall time metrics
- Access RayID for debugging
- Browse error logs and console logs
- Filter logs by date and severity level

## Usage Guide

### Create an Agent Instance

1. Go to the **Agent Instances** page
2. Click **"Create New Instance"**
3. Select the desired agent template
4. Fill in the details:
   - **Instance Name**: Unique name for the instance
   - **Agent Version**: Select the desired version
   - **Configuration**: Set environment variables (if needed)
5. Click **"Create"** to create the instance

### Configure Scheduler

1. Go to the **Instance Detail** page
2. Find the **Scheduler Configuration** section
3. Enter a **Cron Expression**:
   - `0 */5 * * * *` - Every 5 minutes
   - `0 0 * * * *` - Every hour
   - `0 0 0 * * *` - Every day at midnight
   - `0 0 9 * * 1-5` - Monday–Friday at 9:00
4. Click **"Save Configuration"**
5. The system will send a WebSocket message to reload config automatically

### Start/Stop Agent

1. Go to the **Instance Detail** page
2. Click **"Start"** to begin execution
3. Click **"Stop"** to halt execution
4. Status updates in real-time

### View Logs

1. Go to **System Logs** (Admin Panel)
2. Select the date you want to view
3. Filter by level:
   - **All**: Show everything
   - **Errors**: Only errors (status >= 500)
   - **Warnings**: Only warnings (status 400–499)
   - **Info**: Only info (status 200–399)
4. Click a log row to view more details

### Delete an Instance

1. Go to the **Instance Detail** page
2. Scroll down to **Danger Zone**
3. Click **"Delete Instance"**
4. Confirm the deletion
5. The system will remove both the instance and its Durable Object

## Status Codes

| Status | Meaning | Color | Description |
|--------|---------|-------|-------------|
| **Running** | Active | 🟢 Green | Agent is working normally |
| **Stopped** | Halted | ⚪ Gray | Agent was stopped by the user |
| **Offline** | Offline | 🟡 Yellow | Agent hasn't sent a heartbeat recently |
| **Error** | Error | 🔴 Red | Agent encountered an error during execution |

## TTL (Time To Live)

- Instances are retained for **90 days** after going offline/stopped
- A warning is shown when **7 days** remain
- After 90 days, the instance is automatically deleted
- TTL can be extended by starting the instance again
