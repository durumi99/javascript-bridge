const OutputView = require('./OutputView');
const InputView = require('./InputView');
const BridgeGame = require('./BridgeGame');

class App {
  #bridge;

  play() {
    OutputView.printInit();
    InputView.readBridgeSize(this);
  }

  initGame(bridgeLength) {
    this.#bridge = new BridgeGame(bridgeLength);
    InputView.readMoving(this);
  }
  
  proceedGame(input) {
    
    this.#bridge.updateUserInput(input);
    this.printBridge();
    this.calcBridge();
  }

  printBridge() {
    const result = this.#bridge.makeBridgeString(this.#userInput);
    OutputView.printMap(result);
  }

  calcBridge() {
    const result = this.#bridge.move(this.#userInput);
    if (result) {
      InputView.readMoving(this);
    } else {
      console.log('Game Over');
    }
  }
  
}

const app = new App();
app.play();

module.exports = App;
