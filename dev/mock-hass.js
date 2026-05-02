// Minimal Mock HomeAssistant object
const mockHass = {
  states: {
    "water_heater.kettle_idle": {
      entity_id: "water_heater.kettle_idle",
      state: "off",
      attributes: {
        friendly_name: "Kitchen Kettle (Idle)",
        current_temperature: 24,
        temperature: 99,
        min_temp: 40,
        max_temp: 100,
        "kettle.status": 0,
        "kettle.auto_keep_warm": false,
        supported_features: 1
      }
    },
    "water_heater.kettle_heating": {
      entity_id: "water_heater.kettle_heating",
      state: "heat",
      attributes: {
        friendly_name: "Kitchen Kettle (Heating)",
        current_temperature: 78,
        temperature: 90,
        min_temp: 40,
        max_temp: 100,
        "kettle.status": 1,
        "kettle.auto_keep_warm": false,
        supported_features: 1
      }
    },
    "water_heater.kettle_keep_warm": {
      entity_id: "water_heater.kettle_keep_warm",
      state: "heat",
      attributes: {
        friendly_name: "Kitchen Kettle (Keep Warm)",
        current_temperature: 90,
        temperature: 90,
        min_temp: 40,
        max_temp: 100,
        "kettle.status": 4,
        "kettle.auto_keep_warm": true,
        "function.keep_warm_time": 30,
        supported_features: 1
      }
    },
    "water_heater.kettle_fault": {
      entity_id: "water_heater.kettle_fault",
      state: "off",
      attributes: {
        friendly_name: "Kitchen Kettle (Fault)",
        current_temperature: 24,
        temperature: 90,
        min_temp: 40,
        max_temp: 100,
        "kettle.status": 0,
        "kettle.fault": 2,
        supported_features: 1
      }
    }
  },
  callService: (domain, service, data) => {
    console.log(`[HA Mock] Called ${domain}.${service}`, data);
  },
  locale: { language: "en" }
};

const configs = [
  {
    title: "1. Default Layout (Idle)",
    config: {
      type: "custom:water-heater-card",
      entity: "water_heater.kettle_idle",
      show_slider: true
    }
  },
  {
    title: "2. Sparse Layout, Pill Roundness, Custom Color (Heating)",
    config: {
      type: "custom:water-heater-card",
      entity: "water_heater.kettle_heating",
      layout: "sparse",
      roundness: "pill",
      show_slider: true,
      theme_colors: { heating: "#e91e63" } // Pink heating color
    }
  },
  {
    title: "3. Dense Layout, Square Roundness (Keep Warm)",
    config: {
      type: "custom:water-heater-card",
      entity: "water_heater.kettle_keep_warm",
      layout: "dense",
      roundness: "square",
      show_slider: true
    }
  },
  {
    title: "4. Custom Texts & No Animations (Fault)",
    config: {
      type: "custom:water-heater-card",
      entity: "water_heater.kettle_fault",
      primary_info: "Oh no, a fault!",
      secondary_info: "Status: {status} at {current}°C",
      show_slider: true,
      animations: false
    }
  }
];

const container = document.getElementById("container");

// Small delay to ensure custom elements are registered
setTimeout(() => {
  configs.forEach(item => {
    const wrapper = document.createElement("div");
    wrapper.className = "grid-slot";
    const title = document.createElement("h2");
    title.innerText = item.title;
    
    const card = document.createElement("water-heater-card");
    card.setConfig(item.config);
    card.hass = mockHass;
    
    wrapper.appendChild(title);
    wrapper.appendChild(card);
    container.appendChild(wrapper);
  });
}, 100);
