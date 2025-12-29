# Context Hub AI Assistant - Asset Intelligence

A modern, production-ready React TypeScript application demonstrating OpenAI MCP (Message Canonical Protocol) architecture with tool calling capabilities for asset maintenance intelligence.

![Context Hub Demo](https://github.com/user-attachments/assets/38f1fed2-0664-481f-805a-a841dfaf5eaa)

## 🎯 Features

- **Dark Glassmorphism UI**: Beautiful, modern interface with TailwindCSS
- **Real-time Tool Execution**: Visual representation of parallel tool execution
- **MCP Architecture**: Demonstrates canonical message protocol pattern
- **AI Reasoning Display**: Shows GPT-4o reasoning and recommendations
- **Architecture Diagram**: Interactive SVG visualization of system components
- **Azure Ready**: Configured for Azure Static Web Apps deployment

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to see the application.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🏗️ Architecture

The application demonstrates a canonical MCP architecture:

1. **React Frontend** - TypeScript + TailwindCSS
2. **MCP Canonical Layer** - Message protocol orchestration
3. **Parallel Tool Execution**:
   - Tool 1: Postgres telemetry database queries
   - Tool 2: RAG search on unstructured maintenance docs
4. **OpenAI GPT-4o** - Unified reasoning and recommendations

## 📦 Tech Stack

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **TailwindCSS** - Utility-first styling
- **Lucide React** - Beautiful icon library

## 🎨 Demo Functionality

The demo showcases asset maintenance intelligence:

1. **Query**: "Show Rack A3 maintenance history"
2. **Tool Execution**:
   - Queries Postgres for telemetry data (0.4s)
   - Searches RAG for maintenance manual (0.8s)
3. **AI Reasoning**: Combines results to provide actionable recommendations

## ☁️ Azure Deployment

This application is configured for Azure Static Web Apps with GitHub Actions CI/CD:

1. Create an Azure Static Web App
2. Add `AZURE_STATIC_WEB_APPS_API_TOKEN` to GitHub Secrets
3. Push to main branch - automatic deployment via GitHub Actions

## 📝 License

MIT

## 🤝 Contributing

Contributions welcome! This is a demonstration project ideal for:
- OpenAI MCP architecture showcases
- Job portfolio demonstrations
- Investor presentations
- Educational purposes
