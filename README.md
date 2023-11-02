1. AWS: create security group
2. AWS: create launch template with "launch-template_userData.sh"
3. AWS: create Auto Scaling Group & loadbalancer
4. test with artillery (npm install -g artillery)
    - ex: artillery quick --count 1000 -n 2000 $WEB_API_ADDRESS
