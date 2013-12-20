var JsonSchemaCompatability = (function () {

	function convertSchema(obj) {
		if (obj.properties) {
			var required = Array.isArray(obj.required) ? obj.required : [];
			for (var key in obj.properties) {
				var subSchema = obj.properties[key];
				if (subSchema && typeof subSchema.required === 'boolean' && subSchema.required) {
					required.push(key);
				}
			}
			if (required.length) {
				obj.required = required;
			}
		}
		
		if (obj.dependencies) {
			for (var key in obj.dependencies) {
				if (typeof obj.dependencies[key] === 'string') {
					obj.dependencies[key] = [obj.dependencies[key]];
				}
			}
		}
		
		if (obj.type && typeof obj.type !== 'string') {
			var needsReplacement = false;
			var anyOf = [];
			for (var i = 0; i < obj.type.length; i++) {
				var entry = obj.type[i];
				if (typeof entry === 'object') {
					anyOf.push(entry);
					needsReplacement = true;
				} else {
					anyOf.push({"type": entry});
				}
			}
			if (needsReplacement) {
				obj.anyOf = anyOf;
				delete obj.type;
			}
		}
		return obj;
	}

	return module.exports = {
		v4: convertSchema
	};
})();