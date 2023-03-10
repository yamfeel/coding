interface Node_ {
    type: string;
    compute: (data: any) => any;
  }
  
  const radiusInputNode: Node_ = {
    type: "input",
    compute: (data: any) => data.radius,
  };
  
  const areaNode: Node_ = {
    type: "operation",
    compute: (data: any) => Math.PI * data.radius * data.radius,
  };
  
  const circumferenceNode: Node_ = {
    type: "operation",
    compute: (data: any) => 2 * Math.PI * data.radius,
  };
  
  const outputNode: Node_ = {
    type: "output",
    compute: (data: any) => ({
      area: data.area,
      circumference: data.circumference,
    }),
  };
  
  // Connect the nodes
  const nodes = [radiusInputNode, areaNode, circumferenceNode, outputNode];
  
  nodes[1].compute = (data: any) => Math.PI * data.radius * data.radius;
  nodes[2].compute = (data: any) => 2 * Math.PI * data.radius;
  
  const calculateCircle = (data: any) => {
    const result = {};
  
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
  
      switch (node.type) {
        case "input":
          result["radius"] = node.compute(data);
          break;
        case "operation":
          result[node.type] = node.compute(result);
          break;
        case "output":
          return node.compute(result);
      }
    }
  };
  
  // Test the function
  const data = { radius: 5 };
  const result = calculateCircle(data);
  
  console.log(result);
  