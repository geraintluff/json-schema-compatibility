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
		return obj;
	}

	return module.exports = {
		v4: convertSchema
	};
})();