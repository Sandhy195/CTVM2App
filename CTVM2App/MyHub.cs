using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace CTVM2App
{
    [HubName("chat")]
    public class ChatHub : Hub
    {
        public void Announce(string message)
        {
            //broadcast
            Clients.All.Announce(message);
        }

        public void Send(string shortmessage)
        {
            Clients.All.SendChat(shortmessage);
        }

        public DateTime GetServerDateTime()
        {
            return DateTime.Now;
            //Clients.Caller.DisplayDateTime();
        }
    }
}