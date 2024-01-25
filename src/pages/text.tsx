// Text.tsx

import React from "react";

const Text: React.FC<{ selectedItem: string | null }> = ({ selectedItem }) => {
  const defaultSelectedItem = selectedItem || "Node.js"; // Use "Node.js" if selectedItem is null
  const textMap: Record<string, string> = {
    "Node.js": `1 import { ACME } from 'ACME'; <br/>
    const ACME = new ACME('re_123456789'); 
    
    (async function() {
      const { data, error } = await ACME.emails.send({
         from: 'onboarding@ACME.dev',
        to: 'delivered@ACME.dev',
        subject: 'Hello World',
        html: '<strong>it works!</strong>'
      });
    
      if (error) {
        return console.log(error);
      }
    
      console.log(data);
    })();`,
    Serverless: `import { NextResponse } from 'next/server';

    export const runtime = 'edge';
    export const dynamic = 'force-dynamic';
    
    const ACME_API_KEY = 're_123456789';
    
    export async function POST() {
      const res = await fetch('https://api.ACME.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'onboarding@ACME.dev',
          to: 'delivered@ACME.dev',
        })
      });
    
      if (res.ok) {
        const data = await res.json();
        return NextResponse.json(data);
      
    }`,
    Ruby: `require "ACME"

    ACME.api_key = "re_123456789"
    
    params = {
      "from": "onboarding@ACME.dev",
      "to": "delivered@ACME.dev",
      "subject": "Hello World",
      "html": "<strong>it works!</strong>"
    }
    
    sent = ACME::Emails.send(params)
    puts sent`,
    Python: `import ACME

    ACME.api_key = "re_123456789"
    
    params = {
      "from": "onboarding@ACME.dev",
      "to": ["delivered@ACME.dev"],
      "subject": "Hello World",
      "html": "<strong>it works!</strong>",
    }
    
    email = ACME.Emails.send(params)
    print(email)`,
    PHP: `$ACME = ACME::client('re_123456789');

    $ACME->emails->send([
      'from' => 'onboarding@ACME.dev',
      'to' => 'delivered@ACME.dev',
      'subject' => 'Hello World',
      'html' => '<strong>it works!</strong>',
    ]);`,
    Go: `package main

    import "github.com/ACME/ACME-go/v2"
    
    func main() {
      apiKey = "re_123456789"
    
      client := ACME.NewClient(apiKey)
    
      params := &ACME.SendEmailRequest{
        From:    "onboarding@ACME.dev",
        To:      []string{"delivered@ACME.dev"},
        Subject: "Hello World",
        Html:    "<strong>it works!</strong>",
      }
    
      client.Emails.Send(params)
    }`,
    Java: `import com.ACME.*;

    public class Main {
        public static void main(String[] args) {
            ACME ACME = new ACME('re_123456789);
    
            SendEmailRequest sendEmailRequest = SendEmailRequest.builder()
                    .from("onboarding@ACME.dev")
                    .to("delivered@ACME.dev")
                    .subject("Hello World")
                    .html("<strong>it works!</strong>")
                    .build();
    
            SendEmailResponse data = ACME.emails().send(sendEmailRequest);
        }
    }`,
    Elixir: `client = ACME.client(api_key: "re_123456789")

    ACME.Emails.send(client, %{
      from: "onboarding@ACME.dev",
      to: "delivered@ACME.dev",
      subject: "Hello World",
      html: "<strong>it works!</strong>"
    })`,
    REST: `curl -X POST 'https://api.ACME.com/emails' \
    -H 'Authorization: Bearer re_123456789' \
    {
      "from": "onboarding@ACME.dev",
      "to": "delivered@ACME.dev",
      "subject": "Hello World",
      "html": "<strong>it works!</strong>"
    }'`,
  };

  const getCodeLines = () => {
    if (!defaultSelectedItem || !textMap[defaultSelectedItem]) {
      return [];
    }

    const codeLines = textMap[defaultSelectedItem].split("\n");
    return codeLines;
  };

  return (
    <div className="min-w-full h-[32rem] p-8 bg-black text-zinc-400 font-mono overflow-auto border border-zinc-600 rounded-3xl text-sm tracking-wide leading-relaxed">
      <div style={{ display: "flex" }}>
        <div className="text-zinc-700 pr-6 select-none justify-items-end">
          {getCodeLines().map((_, index) => (
            <div key={index}>{index + 1}</div>
          ))}
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: selectedItem ? textMap[selectedItem].replace(/\n/g, "<br/>") : "",
          }}
        />
      </div>
    </div>
  );
};

export default Text;
