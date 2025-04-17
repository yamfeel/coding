async function sendRequest(model) {
    console.time(model); // 开始计时

    const url = 'http://localhost:11434/api/chat';
    const body = JSON.stringify({
        // model: "qwen2.5:7b",
        // model: "qwen2.5:3b",
        model,
        messages: [
            { role: "user", content: "What is the weather in shanghai?" }
        ],
        tools: [
            {
                type: "function",
                function: {
                    name: "get_current_weather",
                    description: "Get the current weather for a city",
                    parameters: {
                        type: "object",
                        properties: {
                            city: {
                                type: "string",
                                description: "The name of the city"
                            }
                        },
                        required: ["city"]
                    }
                }
            }
        ],
        stream: false
    });

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        });

        const contentType = response.headers.get("content-type");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = contentType && contentType.includes("application/json")
            ? await response.json()
            : await response.text();

        console.log('Response:', data);
        const toolsToString = JSON.stringify(data.message.tool_calls, null, 2);
        console.log('tool_calls', toolsToString);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        console.timeEnd(model); // 结束计时并输出耗时
    }
}

// sendRequest('llama3.2');
sendRequest('qwen2.5:3b');