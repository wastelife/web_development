#from twilio.rest import TwilioRestClient
from twilio import rest

account_sid = "AC4afe81e8f3914cb575cb5b5ad0a67bb4" # Your Account SID from www.twilio.com/console
auth_token  = "3e2f1c3918d378ca04aca74c114f035a"  # Your Auth Token from www.twilio.com/console

client = rest.TwilioRestClient(account_sid, auth_token)

message = client.messages.create(body="hi Zhou",
    to="+18312957242",    # Replace with your phone number
    from_="+18313461218") # Replace with your Twilio number

print(message.sid)
