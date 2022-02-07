## Github Actions  
Github actions 是2019年秋天github发布的CI/CD工具，高效稳定，功能抢答，易学易用
> 自动化构建和测试
> 接口测试，依赖于测试机搭建

### 使用
> 官方文档 [https://docs.github.com/en/actions]  
> 在项目根目录创建 .github/workflows 文件夹，并创建对应的 yml文件

#### 应用场景 
- master 分支，自动化测试
- dev 分支，自动部署到测试机
- v*.*.* 格式的tag，自动上线，支持回滚