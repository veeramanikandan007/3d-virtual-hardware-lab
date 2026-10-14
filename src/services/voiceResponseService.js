import enLocale from '../data/locales/en';
import taLocale from '../data/locales/ta';

const locales = {
  'en-IN': enLocale,
  'ta-IN': taLocale
};

export function getDiagnosticMessage(diagnostic, lang = 'en-IN') {
  const locale = locales[lang] || enLocale;
  
  if (diagnostic.rule_id && locale.DIAGNOSTICS[diagnostic.rule_id]) {
    return locale.DIAGNOSTICS[diagnostic.rule_id];
  }
  
  if (diagnostic.severity === 'CRITICAL' || diagnostic.severity === 'ERROR') {
    return locale.DIAGNOSTICS.CRITICAL.replace('{message}', diagnostic.message);
  }
  
  return locale.DIAGNOSTICS.ERROR.replace('{message}', diagnostic.message);
}

export function getCommandResponseMessage(commandObj, lang = 'en-IN') {
  const locale = locales[lang] || enLocale;

  if (commandObj.command === 'SEARCH_COMPONENT') {
    return locale.COMMANDS.SEARCH_COMPONENT.replace('{query}', commandObj.payload.query);
  }
  if (commandObj.command === 'INSPECT_COMPONENT') {
    return locale.COMMANDS.INSPECT_COMPONENT.replace('{component}', commandObj.payload.componentId);
  }
  if (commandObj.command === 'UNKNOWN') {
    return locale.COMMANDS.UNKNOWN.replace('{text}', commandObj.rawText);
  }
  
  return locale.COMMANDS[commandObj.command] || "";
}

