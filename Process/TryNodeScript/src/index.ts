import { GraphController } from "./controllers/GraphController";
import { GraphService } from "./services/GraphService";
import { NodeRegistry } from "./components/NodeRegistry";

// 创建图控制器和图服务实例
const graphController = new GraphController();
const graphService = new GraphService();

// 注册默认节点
NodeRegistry.registerDefaultNodes();

// 将图控制器和图服务实例传递给节点工厂和节点注册表
NodeRegistry.setGraphController(graphController);
NodeRegistry.setGraphService(graphService);

// 运行应用程序
graphController.start();