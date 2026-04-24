# Cron Expression Format

AI Agents Management supports both 5-field and 6-field cron expressions for scheduling automated tasks.

## Supported Formats

### 5-Field Format (Standard)
```
* * * * *
│ │ │ │ │
│ │ │ │ └─── Day of Week (0-7, Sunday = 0 or 7)
│ │ │ └───── Month (1-12)
│ │ └─────── Day of Month (1-31)
│ └───────── Hour (0-23)
└─────────── Minute (0-59)
```

### 6-Field Format (With Seconds)
```
* * * * * *
│ │ │ │ │ │
│ │ │ │ │ └─── Day of Week (0-7, Sunday = 0 or 7)
│ │ │ │ └───── Month (1-12)
│ │ │ └─────── Day of Month (1-31)
│ │ └───────── Hour (0-23)
│ └─────────── Minute (0-59)
└───────────── Second (0-59)
```

## Special Characters

| Character | Description | Example |
|-----------|-------------|---------|
| `*` | Any value | `* * * * *` (every minute) |
| `,` | Value list separator | `1,3,5 * * * *` (minutes 1, 3, 5) |
| `-` | Range of values | `1-5 * * * *` (minutes 1 through 5) |
| `/` | Step values | `*/5 * * * *` (every 5 minutes) |

## Common Examples

### Every Minute
```
* * * * *
```

### Every 5 Minutes
```
*/5 * * * *
```
or with seconds:
```
0 */5 * * * *
```

### Every Hour
```
0 * * * *
```
or with seconds:
```
0 0 * * * *
```

### Every Day at Midnight
```
0 0 * * *
```
or with seconds:
```
0 0 0 * * *
```

### Every Weekday at 9 AM
```
0 9 * * 1-5
```
or with seconds:
```
0 0 9 * * 1-5
```

### Every Monday at 2:30 PM
```
30 14 * * 1
```
or with seconds:
```
0 30 14 * * 1
```

### Every 15 Minutes During Business Hours
```
*/15 9-17 * * 1-5
```
or with seconds:
```
0 */15 9-17 * * 1-5
```

## Validation Rules

- All fields must contain valid values within their ranges
- Day of week: 0-7 (0 and 7 both represent Sunday)
- Month: 1-12 (January = 1, December = 12)
- Day of month: 1-31 (depends on the month)
- Hour: 0-23 (24-hour format)
- Minute: 0-59
- Second: 0-59 (only for 6-field format)

## Tips

1. **Use 6-field format for precise timing**: If you need second-level precision, use the 6-field format
2. **Test your expressions**: Use online cron expression calculators to verify your expressions
3. **Consider timezone**: All times are in UTC
4. **Avoid overlapping schedules**: Make sure your cron expressions don't create conflicting schedules