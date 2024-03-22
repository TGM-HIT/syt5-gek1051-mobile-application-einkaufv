/*
testcase created with https://chat.openai.com, Prompt:
how could i write a testcase for these functions:

moveUp(index) {
			if (index > 0) {
				var itemToMove = this.shoppingLists[index];
				this.shoppingLists.splice(index, 1); // remove the item
				this.shoppingLists.splice(index - 1, 0, itemToMove); // insert it one position up
			}
		},
		moveDown(index) {
			if (index < this.shoppingLists.length - 1) {
				var itemToMove = this.shoppingLists[index];
				this.shoppingLists.splice(index, 1); // remove the item
				this.shoppingLists.splice(index + 1, 0, itemToMove); // insert it one position down
			}
		}

that looks like this:
describe('moveup', function () {
  it('should return 1', function () {
    assert.equal(1, 1)
  })
})
*/
describe("List Manager", function () {
  beforeEach(function () {
    // Setup your listManager object with a fresh state before each test
    this.listManager = {
      shoppingLists: ["apples", "bananas", "carrots"],
      moveUp: function (index) {
        if (index > 0) {
          var itemToMove = this.shoppingLists[index];
          this.shoppingLists.splice(index, 1);
          this.shoppingLists.splice(index - 1, 0, itemToMove);
        }
      },
      moveDown: function (index) {
        if (index < this.shoppingLists.length - 1) {
          var itemToMove = this.shoppingLists[index];
          this.shoppingLists.splice(index, 1);
          this.shoppingLists.splice(index + 1, 0, itemToMove);
        }
      },
    };
  });

  describe("moveUp", function () {
    it("should move an item up in the list", function () {
      this.listManager.moveUp(1); // Move 'bananas' up
      expect(this.listManager.shoppingLists).to.deep.equal([
        "bananas",
        "apples",
        "carrots",
      ]);
    });

    it("should not move the first item up", function () {
      this.listManager.moveUp(0); // Attempt to move 'apples' up
      expect(this.listManager.shoppingLists).to.deep.equal([
        "apples",
        "bananas",
        "carrots",
      ]);
    });
  });

  describe("moveDown", function () {
    it("should move an item down in the list", function () {
      this.listManager.moveDown(1); // Move 'bananas' down
      expect(this.listManager.shoppingLists).to.deep.equal([
        "apples",
        "carrots",
        "bananas",
      ]);
    });

    it("should not move the last item down", function () {
      this.listManager.moveDown(2); // Attempt to move 'carrots' down
      expect(this.listManager.shoppingLists).to.deep.equal([
        "apples",
        "bananas",
        "carrots",
      ]);
    });
  });
});
