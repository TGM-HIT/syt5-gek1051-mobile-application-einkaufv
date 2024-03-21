
describe('ShoppingListApp', function() {
  describe('List Blending Operations', function() {
      beforeEach(function() {
          // Reset localStorage for each test
          localStorage.setItem('blendedOutIds', JSON.stringify([]));
      });

      function blendOutList(listId) {
          // Blend out a list by adding its ID to localStorage
          let blendedOutIds = JSON.parse(localStorage.getItem('blendedOutIds') || '[]');
          blendedOutIds.push(listId);
          localStorage.setItem('blendedOutIds', JSON.stringify(blendedOutIds));
      }

      function blendInLists() {
          // Blend in all lists by clearing the localStorage
          localStorage.setItem('blendedOutIds', JSON.stringify([]));
      }

      function isListBlendedOut(listId) {
          // check if list is blended out
          let blendedOutIds = JSON.parse(localStorage.getItem('blendedOutIds') || '[]');
          return blendedOutIds.includes(listId);
      }

      it('should correctly blend out a list', function() {
          blendOutList('list1');
          assert.equal(true, isListBlendedOut('list1'));
      });

      it('should correctly blend in all lists', function() {
          // First, blend out two lists to setup the test
          blendOutList('list1');
          blendOutList('list2');

          // Perform blend in operation
          blendInLists();

          // Check that both lists are no longer blended out
          assert.equal(false, isListBlendedOut('list1'));
          assert.equal(false, isListBlendedOut('list2'));
      });
  });
});
