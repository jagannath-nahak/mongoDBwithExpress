# ♟️ Chess Game – Real-Time Multiplayer Chess

A dynamic two-player chess game built using **Socket.IO**, **Node.js**, **Express.js**, and **Vanilla JS/CSS**, with spectator mode support, drag-drop UI, and turn-based validation.  

---

## 🚀 Features

- Real-time multiplayer gameplay with synchronized board updates  
- Drag-and-drop chess pieces with legal move checks  
- Role-based logic for player (white/black) and spectators  
- Undo/redo and move history with time logs & validation  
- Spectator-friendly view that follows player’s actions  
- Clean responsive chessboard UI  
- Capture & highlight move logic with visual hints  
- Centralized server state handling (Socket.IO)  

---

## 🛠️ Tech Stack

| Layer      | Technologies        |
------------------------------------
| Frontend   | Html,css,JavaSCript |
|Backend     |Node.js,Express.js   |
|View Engine | EJS                 |

---

## 🎨 UI Highlights

- Lightweight flat-style chessboard  
- Drag-drop UI with live move validation  
- Highlighted squares for available moves  
- Undo/Redo buttons for move tracking  
- Spectator mode with real-time board sync  

---

## ⚡ How It Works

1. Players are auto-assigned roles on connection (`white`, `black`, or `spectator`)  
2. Moves are synced via **Socket.IO** to all clients in real time  
3. Server validates moves before updating the board  
4. Spectators passively observe with no move privilege  

---

## ▶️ Run Locally

### Clone the repo
```bash
git clone https://github.com/your-username/real-time-chess.git
cd real-time-chess
