import Hubspot from "hubspot";

export const hubSpotConnection = new Hubspot({ apiKey: process.env.HUBSPOTKEY})
