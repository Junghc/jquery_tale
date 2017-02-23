      var action_queue = [
        { action: 'woodcutter_showup', params: null },
        { action: 'lake_showup', params: null },
        { action: 'goddess_pickup_axe', params: 'golden' },
        { action: 'goddess_sink_below_water', params: null },
        { action: 'goddess_putdown_axe', params: 'golden' },
        { action: 'goddess_pickup_axe', params: 'silver' }
      ];
      var next_action = function () {
        if (action_queue.length == 0) {
          return true;
        }
        action = action_queue.shift();
        actions[action['action']](action['params']);
      };
      var actions = {
        woodcutter_showup: function() {
          $('#woodcutter').fadeIn(3000, next_action);
        },
        lake_showup: function() {
          $('#lake').fadeIn(3000, next_action);
        },
        goddess_sink_below_water: function() {
          $('#goddess_block').animate({
            'top': '40px'
          }, 3000, next_action);
        },
        goddess_pickup_axe: function(type) {
          $('#' + type + '_axe').detach()
                                .addClass('goddess_hand')
                                .appendTo('#goddess_block')
                                .show();
          $('#goddess_block').animate({
            'top': '-250px'
          }, 3000, next_action);
        },
        goddess_putdown_axe: function(type) {
          $('#' + type + '_axe').hide()
                                .detach()
                                .removeClass('goddess_hand')
                                .insertBefore('#front_part_inner');
          next_action();
        }
      };
      $(function() {
        next_action();
      });
