# Troubleshooting

Common issues and solutions when working with AI Agents Management.

## WebSocket Connection Issues

### Problem: "WebSocket closed (1006)" Error
**Symptoms:**
- Agent instances show "Offline" status
- Configuration changes don't take effect
- Real-time updates not working

**Solutions:**
1. **Check WebSocket URL**: Ensure the WebSocket endpoint is accessible
2. **Verify Authentication**: Make sure JWT tokens are valid and not expired
3. **Check Network**: Verify firewall settings allow WebSocket connections
4. **Restart Instance**: Try stopping and starting the agent instance

### Problem: "No Active WebSocket" Error
**Symptoms:**
- Cannot send configuration updates
- Instance appears disconnected

**Solutions:**
1. **Wait for Reconnection**: WebSocket connections auto-reconnect every 30 seconds
2. **Check Instance Status**: Ensure the instance is in "Running" state
3. **Verify DO_SYNC_SECRET**: Check that the secret is properly configured

## Agent Instance Issues

### Problem: Instance Stuck in "Starting" State
**Symptoms:**
- Instance shows "Starting" for more than 5 minutes
- No logs appear in the system

**Solutions:**
1. **Check Agent Code**: Verify the agent code doesn't have infinite loops or blocking operations
2. **Review Dependencies**: Ensure all required packages are available
3. **Check Memory Limits**: Verify the instance has sufficient memory
4. **Restart Instance**: Stop and start the instance again

### Problem: Instance Shows "Error" Status
**Symptoms:**
- Red error indicator in the dashboard
- Agent stops responding

**Solutions:**
1. **Check System Logs**: Go to Admin Panel → System Logs to view error details
2. **Review Agent Code**: Look for runtime errors or exceptions
3. **Verify Configuration**: Check environment variables and settings
4. **Check Resource Usage**: Ensure CPU and memory usage are within limits

## Scheduler Issues

### Problem: Cron Expression Validation Fails
**Symptoms:**
- "Invalid cron expression" error message
- Cannot save scheduler configuration

**Solutions:**
1. **Check Format**: Ensure you're using either 5-field or 6-field format consistently
2. **Validate Syntax**: Use online cron validators to check your expression
3. **Common Mistakes**:
   - Using `*/5` in 5-field format (should be `0 */5 * * *`)
   - Invalid day of week values (use 0-7, not 1-7)
   - Invalid month values (use 1-12, not 0-11)

### Problem: Scheduled Tasks Not Running
**Symptoms:**
- Cron expression is valid but tasks don't execute
- No execution logs in the system

**Solutions:**
1. **Check Instance Status**: Ensure the instance is "Running"
2. **Verify Timezone**: All cron expressions use UTC time
3. **Check Next Execution**: Verify the next scheduled time is correct
4. **Review Agent Code**: Ensure the agent handles scheduled execution properly

## Performance Issues

### Problem: High CPU Usage
**Symptoms:**
- Instance shows high CPU time in metrics
- Slow response times

**Solutions:**
1. **Optimize Agent Code**: Review loops and recursive functions
2. **Add Delays**: Use `await new Promise(resolve => setTimeout(resolve, 1000))` to add delays
3. **Batch Operations**: Process data in smaller chunks
4. **Check External APIs**: Verify third-party services aren't causing delays

### Problem: Memory Leaks
**Symptoms:**
- Instance memory usage keeps increasing
- Instance becomes unresponsive over time

**Solutions:**
1. **Review Variable Scope**: Ensure variables are properly cleaned up
2. **Close Connections**: Always close database and HTTP connections
3. **Clear Intervals**: Use `clearInterval()` and `clearTimeout()` properly
4. **Monitor Objects**: Avoid keeping large objects in memory unnecessarily

## Authentication Issues

### Problem: "Unauthorized" Errors
**Symptoms:**
- Cannot access instance details
- API calls return 401 errors

**Solutions:**
1. **Check JWT Token**: Verify the token is valid and not expired
2. **Verify Permissions**: Ensure your account has access to the instance
3. **Re-login**: Try logging out and logging back in
4. **Check CLI Authentication**: For CLI users, run `lifectl auth login`

## Data Issues

### Problem: Instance Data Not Persisting
**Symptoms:**
- Configuration changes are lost after restart
- Instance state resets unexpectedly

**Solutions:**
1. **Check Durable Objects**: Verify DO storage is working properly
2. **Review Save Operations**: Ensure data is properly saved in agent code
3. **Check Storage Limits**: Verify storage quotas aren't exceeded
4. **Use Proper APIs**: Use the correct storage APIs for persistence

## Getting Help

If you continue to experience issues:

1. **Check System Logs**: Always review the logs first for error details
2. **Document the Issue**: Note the exact error messages and steps to reproduce
3. **Check Instance Details**: Include instance ID, agent version, and configuration
4. **Contact Support**: Provide all relevant information when requesting help

## Preventive Measures

1. **Regular Monitoring**: Check instance status and logs regularly
2. **Resource Limits**: Set appropriate CPU and memory limits
3. **Error Handling**: Implement proper error handling in agent code
4. **Testing**: Test agents thoroughly before deploying to production
5. **Backup Configuration**: Keep backups of important configurations