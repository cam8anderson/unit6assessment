const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("draw button displays the div id= choices", async () => {
    await driver.get("http://localhost:8000");

    const choices = await driver.findElement(By.id("choices"));
    const displayed = await choices.isDisplayed();
    expect(displayed).toBe(true);
  });

  test("add to duo button working", async () => {
    await driver.get("http://localhost:8000");

    await (await driver.findElement(By.id("draw-button")))
      .click()
      .then(() => driver.findElement(By.id("add-to-duo")).click());

    const player = await driver.findElement(By.id("player-duo"));
    const display = await player.isDisplayed();
    expect(display).toBe(true);
  });
});
